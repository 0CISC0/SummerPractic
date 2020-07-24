from django.shortcuts import render
from mainApp.neuralNetwork import usingNetwork
import tensorflow as tf
import mainApp.neuralNetwork.dataWork as dw

output_res = ''


def index(request):
    global output_res
    if request.method == "POST":
        image_code = request.POST.get("say")
        dw.formatCodeInIMG(image_code)

        model = tf.keras.models.load_model('mainApp/neuralNetwork/mlp_digits_28x28.h5')
        output_res = output_res + " " + str(usingNetwork.mlp_digits_predict(model, 'image.png'))

    return render(request, 'mainApp/html/mainPageView.html', {'result': output_res})


def download(request):
    if request.method == "GET":
        data = str(request.GET.get("output"))
        f = open('data.txt', 'w')
        f.write(data)

    return render(request, 'mainApp/html/mainPageView.html')
