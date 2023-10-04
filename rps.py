import random
def play_round():
    computer = random.choice(['Rock', 'Paper', 'Scissors'])
    play = input('Pick your poison: Rock, Paper, or Scissors? ')
    player = play.lower
    print(player)
    if player != 'rock' or player != 'paper' or player != 'scissors':
        print("Please make a valid selection")
        play_round()
    else: 
        if computer == player:
            return print("It's a tie.")
        if check_winner(player, computer):
            return print("You won!")
        else:
            return print("Computer played " + computer + ". Computer wins :(")


def check_winner(player, computer):
    if (player == 'r' and computer == 's') or (player == 's' and computer == 'p') or (player == 'p' and computer == 'r'):
       return True
play_round()