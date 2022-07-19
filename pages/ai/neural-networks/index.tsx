import { NextPage } from "next";
import React from "react";
import Layout from "../../../components/layout/Layout";
import QA from "../../../components/QA";
import UnOrderdList from "../../../components/lists/UnOrderdList";

const NeuralNetworks: NextPage = () => {
  const neuralNetworksData = {
    title: "Neural Networks",
    description:
      "Take inspiration from biological neural networks, although they work quite a bit differently",
    list: [
      "A neural network in AI is a collection of small computing units called neurons that take incoming data and learn to make decisions over time",
      "Neural networks are often layered deep and are the reason deep learning algorithms become more efficient as the datasets increase in volume, as opposed to other machine learning algorithms that may plateau as data increases",
    ],
  };

  const neuralNetworksProcess = {
    title: "",
    description:
      "Neural networks learn through a process called backpropagation ",
    list: [
      "Backpropagation uses a set of training data that match known inputs to desired outputs",
      "First, the inputs are plugged into the network and outputs are determined",
      "Then, an error function determines how far the given output is from the desired output",
      "Finally, adjustments are made in order to reduce errors",
    ],
  };

  const neuralNetorkLayerData = {
    title: "Layer",
    description: "A collection of neurons is called a layer",
    list: [
      "a layer takes in an input and provides an output",
      "Any neural network will have one input layer and one output layer",
      "It will also have one or more hidden layers which simulate the types of activity that goes on in the human brain",
      "Hidden layers take in a set of weighted inputs and produce an output through an activation function",
    ],
  };

  const deepNeuralNetworkData = {
    title: "Deep Neural Network",
    data: "A neural network having more than one hidden layer is referred to as a deep neural network.",
  };

  const perceptronsData = {
    title: "Perceptrons",
    description: "The simplest and oldest types of neural networks",
    list: [
      "They are single-layered neural networks consisting of input nodes connected directly to an output node",
      "Input layers forward the input values to the next layer, by means of multiplying by a weight and summing the results",
    ],
  };

  const biasAndHiddenNodesData = {
    title: "Bias and Hidden Nodes",
    description: "Hidden and output nodes have a property called bias",
    list: [
      "Hidden layers receive input from other nodes and forward their output to other nodes",
      "Bias is a special type of weight that applies to a node after the other inputs are considered",
      "An activation function determines how a node responds to its inputs",
      "The function is run against the sum of the inputs and bias, and then the result is forwarded as an output",
      "Activation functions can take different forms, and choosing them is a critical component to the success of a neural network",
    ],
  };

  const convolutionalNeuralNetworksOrCNNsData = {
    title: "Convolutional neural networks ( CNNs )",
    list: [
      "Multilayer neural networks that take inspiration from the animal visual cortex",
      "CNNs are useful in applications such as image processing, video recognition, and natural language processing",
      "A convolution is a mathematical operation, where a function is applied to another function and the result is a mixture of the two functions",
      "Convolutions are good at detecting simple structures in an image, and putting those simple features together to construct more complex features",
      "In a convolutional network, this process occurs over a series of layers, each of which conducts a convolution on the output of the previous layer. CNNs are adept at building complex features from less complex ones",
    ],
  };

  const recurrentNeuralNetworksOrRNNsData = {
    title: "Recurrent neural networks ( RNNs )",
    list: [
      "Recurrent because they perform the same task for every element of a sequence, with prior outputs feeding subsequent stage inputs",
      "RNNs can make use of information in long sequences, each layer of the network representing the observation at a certain time.",
    ],
  };

  return (
    <>
      <Layout title="Neural Networks - AI">
        <>
          <UnOrderdList
            heading={neuralNetworksData.title}
            description={neuralNetworksData.description}
            listData={neuralNetworksData.list}
          />
          <UnOrderdList
            heading={neuralNetworksProcess.title}
            description={neuralNetworksProcess.description}
            listData={neuralNetworksProcess.list}
          />
          <UnOrderdList
            heading={neuralNetorkLayerData.title}
            description={neuralNetorkLayerData.description}
            listData={neuralNetorkLayerData.list}
          />
          <QA
            question={deepNeuralNetworkData.title}
            answer={deepNeuralNetworkData.data}
          />
          <UnOrderdList
            heading={perceptronsData.title}
            description={perceptronsData.description}
            listData={perceptronsData.list}
          />
          <UnOrderdList
            heading={biasAndHiddenNodesData.title}
            description={biasAndHiddenNodesData.description}
            listData={biasAndHiddenNodesData.list}
          />
          <UnOrderdList
            heading={convolutionalNeuralNetworksOrCNNsData.title}
            listData={convolutionalNeuralNetworksOrCNNsData.list}
          />
          <UnOrderdList
            heading={recurrentNeuralNetworksOrRNNsData.title}
            listData={recurrentNeuralNetworksOrRNNsData.list}
          />
        </>
      </Layout>
    </>
  );
};

export default NeuralNetworks;
