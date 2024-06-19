from flink.streaming.api.environment import StreamExecutionEnvironment

env = StreamExecutionEnvironment.get_execution_environment()

def process_stream(stream):
    stream.map(lambda x: x.upper()).print()

stream = env.add_source(lambda: ['hello', 'world'])
process_stream(stream)

env.execute('Flink Streaming Example')
