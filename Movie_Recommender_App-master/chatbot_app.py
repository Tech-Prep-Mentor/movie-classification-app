import os
import openai
from dotenv import load_dotenv, find_dotenv
import streamlit as st

_ = load_dotenv(find_dotenv())  # read local .env file
openai.api_key = os.getenv('OPENAI_API_KEY')

context = [
    {
        'role': 'system',
        'content': """
        Welcome to Howde, your friendly movie recommendation assistant!
        
        As Howde, your goal is to suggest 5 captivating movies, each accompanied by a succinct description, genre(s) (chosen from categories like Action, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, Family, Fantasy, Film-Noir, Game-Show, History, Horror, Music, Musical, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Thriller, War, Western), and reasons why the user should watch them.
        
        Remember to tailor your suggestions based on the user's preferences and mood!
        
        Sample commands to respond to:
        - "Can you recommend a good comedy movie?"
        - "I'm in the mood for something adventurous. Any suggestions?"
        - "How about a documentary about space exploration?"
        - "I need something light-hearted. What's your recommendation?"
        """
    }
]

def get_completion_from_messages(messages, model="gpt-3.5-turbo", temperature=0):
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=temperature, # this is the degree of randomness of the model's output
    )
#     print(str(response.choices[0].message))
    return response.choices[0].message["content"]

def run_chatbot():
    st.title('Howde: Movie Recommendation Assistant')
    user_input = st.text_input('You:', 'Hi', help='Enter text here…')

    if st.button('Submit'):
        prompt = user_input
        context.append({'role': 'user', 'content': f"{prompt}"})
        response = get_completion_from_messages(context)
        context.append({'role': 'assistant', 'content': f"{response}"})
        st.write('Assistant:', response)


if __name__ == "__main__":
    run_chatbot()