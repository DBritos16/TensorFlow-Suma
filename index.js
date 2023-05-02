//Requerir tensor
const tf = require('@tensorflow/tfjs');

//Crear dos tensores de una dimensión;
const tensor1 = tf.tensor1d([10,20,15]);
const tensor2 = tf.tensor1d([5,12,10]);

//Utilizar el metodo .add para realizar la suma entre los dos tensores y
//guardar el resultado en una constante
const result = tensor1.add(tensor2);

//Imprimir en consola el resultado
result.print();