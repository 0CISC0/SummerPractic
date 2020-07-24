import base64


def formatCodeInIMG(image_code):
    fmt, imgstr = image_code.split(';base64,')
    ext = fmt.split('/')[-1]
    data = base64.b64decode(imgstr)
    with open('image.' + ext, 'wb') as f:
        f.write(data)
