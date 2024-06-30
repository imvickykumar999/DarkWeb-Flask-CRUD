import os
from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///media.db'
app.config['UPLOAD_FOLDER'] = 'static/uploads'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Ensure the uploads directory exists
if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])

class Media(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    filename = db.Column(db.String(100), nullable=False)
    media_type = db.Column(db.String(10), nullable=False)  # photo or video

@app.route('/')
def index():
    media = Media.query.all()
    return render_template('index.html', media=media)

@app.route('/create', methods=['GET', 'POST'])
def create():
    if request.method == 'POST':
        title = request.form['title']
        description = request.form['description']
        file = request.files['file']
        if file:
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)
            
            # Determine the media type
            if file.content_type.startswith('image/'):
                media_type = 'photo'
            elif file.content_type.startswith('video/'):
                media_type = 'video'
            else:
                media_type = 'unknown'
            
            new_media = Media(title=title, description=description, filename=filename, media_type=media_type)
            db.session.add(new_media)
            db.session.commit()

        return redirect(url_for('index'))
    return render_template('create.html')

@app.route('/update/<int:id>', methods=['GET', 'POST'])
def update(id):
    media = Media.query.get_or_404(id)
    if request.method == 'POST':
        media.title = request.form['title']
        media.description = request.form['description']
        file = request.files['file']
        if file:
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)
            
            # Determine the media type
            if file.content_type.startswith('image/'):
                media.media_type = 'photo'
            elif file.content_type.startswith('video/'):
                media.media_type = 'video'
            else:
                media.media_type = 'unknown'
            
            media.filename = filename

        db.session.commit()
        return redirect(url_for('index'))
    return render_template('update.html', media=media)

@app.route('/delete/<int:id>')
def delete(id):
    media = Media.query.get_or_404(id)
    db.session.delete(media)
    db.session.commit()
    return redirect(url_for('index'))

@app.route('/media/<int:id>')
def view_media(id):
    media_item = Media.query.get_or_404(id)
    return render_template('view_media.html', media_item=media_item)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
