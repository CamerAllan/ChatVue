import json

sender_count={}
reactor_count={}

with open('message_1.json') as json_file:  
    data = json.load(json_file)
    for message in data['messages']:
        name = message["sender_name"]
        sender_count[name]=sender_count.get(name,0)+1

        try:
            reactions = message["reactions"]
            for reaction in reactions:
                actor = reaction["actor"]
                reactor_count[actor]=reactor_count.get(actor,0)+1
        except:
            print("pm")

print(sender_count)
print(reactor_count)