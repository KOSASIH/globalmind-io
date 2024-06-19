import spacy

nlp = spacy.load('en_core_web_sm')

def process_text(text):
    doc = nlp(text)
    entities = [(entity.text, entity.label_) for entity in doc.ents]
    return entities
