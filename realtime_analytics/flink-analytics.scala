import org.apache.flink.api.scala._
import org.apache.flink.streaming.api.scala.StreamExecutionEnvironment

object AnalyticsJob {
  def main(args: Array[String]) {
    val env = StreamExecutionEnvironment.getExecutionEnvironment

    val events = env
      .addSource(new FlinkKafkaConsumer("events", new SimpleStringSchema(), props))
      .map(event => {
        // Process event data
        event
      })
      .keyBy(0)
      .window(TumblingEventTimeWindows.of(Time.seconds(10)))
      .reduce((a, b) => a + b)

    events.print()

    env.execute("Analytics Job")
  }
}
