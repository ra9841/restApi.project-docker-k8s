# FROM openjdk:8
 #EXPOSE 8080
 #ADD target/rabin.angular-project.jar rabin.angular-project.jar 
 #ENTRYPOINT ["java","-jar","/rabin.angular-project.jar"]
 

FROM adoptopenjdk/openjdk11

LABEL mentainer="rabin.shrestha7@gmail.com"

WORKDIR /app

COPY target/rabin.angular-project-0.0.1-SNAPSHOT.jar /app/rabin.angular-project.jar

ENTRYPOINT ["java", "-jar", "rabin.angular-project.jar"]