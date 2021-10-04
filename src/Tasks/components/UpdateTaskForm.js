import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../Shared/components/FormElements/Input';
import Button from '../../Shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../Shared/util/validators';
import { useForm } from '../../Shared/hooks/form-hook';
import './PlaceForm.css';
import Card from '../../Shared/components/UIElements/Card';

const DUMMY_TASKS = [
  {
      id: "1",
      title: "Learning Singleton Pattern",
      description: "I would like to learn singleton in JS language because it's important for my job",
      link: "https://link.com",
      proiority: 3,
      timeToFinish: 120,
      status: "active",
      creator: "u1",
      assignedTo:"u1"
  },
  {
      id: "2",
      title: "Resouce 2 Description",
      description: "I would like to learn singleton in JS language because it's important for my job",
      link: "https://link.com",
      proiority: 2,
      timeToFinish: 60,
      status: "inactive",
      creator: "u2",
      assignedTo:"u1"
  },
  {
      id: "3",
      title: "Resource 3 Description",
      description: "I would like to learn singleton in JS language because it's important for my job",
      link: "https://link.com",
      proiority: 1,
      timeToFinish: 30,
      status: "inactive",
      creator: "u2",
      assignedTo:"u2"
  }
]
const DUMMY_PLACES = [
  {
    id: '1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: '2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  }
];

const UpdateTask = () => {
  const [isLoading, setIsLoading] = useState(true);
  //TODO: fix this
  const taskId = useParams().taskId;
  //useForm(initialInputs:, initialFormValidity: any)

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      priority: {
        value: '',
        isValid: false
      },
      assignedTo: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const identifiedTask = DUMMY_TASKS.find(t => t.id === taskId);

  useEffect(() => {
    if (identifiedTask) {
      setFormData(
        {
          title: {
            value: identifiedTask.title,
            isValid: true
          },
          description: {
            value: identifiedTask.description,
            isValid: true
          },
          priority: {
            value: 1,
            isValid: false
          },
          assignedTo: {
            value: identifiedTask.assignedTo,
            isValid: false
          }
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedTask]);

  const taskUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedTask) {
    return (
      <div className="center">
        <Card>
        <h2>Could not find task</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    formState.inputs.title.value && (
    <form className="place-form" onSubmit={taskUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      {/* TODO fix priority so must not be erased before proceeding, also switch for selector */}
       <Input
        id="priority"
        element="textarea"
        label="Priority"
        validators={[VALIDATOR_MINLENGTH(0)]}
        errorText="Please enter a valid priority (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.priority.value}
        initialValid={formState.inputs.priority.isValid}
      />
       <Input
        id="assignedTo"
        element="textarea"
        label="AssignedTo"
        validators={[VALIDATOR_MINLENGTH(2)]}
        errorText="Please select team member(s) to assign task (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.assignedTo.value}
        initialValid={formState.inputs.assignedTo.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE TASK
      </Button>
    </form>
  ));
};

export default UpdateTask;
