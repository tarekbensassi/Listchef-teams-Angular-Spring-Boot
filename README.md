# Welcome to the ListChef project !

Cette application est développée en tant que Mini projet  avec Angulars & Spring Boot .

## Getting Started

All the code required to run this project is available in this Git repository.
 You can either download it as a zip file from github or run:

```bash
$ git clone https://github.com/tarekbensassi/Listchef-teams-Angular-Spring-Boot

```

### Environment

In order to run DB Consulting project you will need:

* [Java 11] - Main Backend Language
* [Maven](https://maven.apache.org/) - Dependency Management
* [PostgreSQL](https://www.postgresql.org) - The default RDBMS.

In addition, there are a few optional yet recommended installations:

* [Git](https://git-scm.com)
* Your favorte IDE. I am using [Spring STS](https://spring.io/tools/sts/all), which is based on Eclipse, but feel free to use whichever you find more convenient.


### Prerequisites


### Time to run the application!

You can run the application either using maven on the command line or using your IDE
 to import and run the code. We'll be covering Maven and Spring STS in this section.

#### Using Maven

If you don't want to go through the process of using an IDE and just want to get the 
project running to explore it, navigate to the directory where you downloaded the source code and run:

```bash
$ mvn spring-boot:run
```

If everything went well, you should be able to access the web app here: http://localhost:9090

#### Using Spring STS

Spring STS makes it simple to import and run Spring Boot projects. In order to do so:

##### Import the project:
1. Open Spring STS.
2. Navigate to "File - Import".
3. In the Wizard, look for "Existing Maven Projects" and click Next.
4. Click Browse and select the root directory of the source code.
5. Click on Finish.

##### Run the project:

Before hitting run, lets make sure all the Maven dependencies are in place:

1. Open the Package Explorer.
2. Right click on the  project.
3. Navigate to "Maven - Update Project".

Once the dependencies are downloaded and installed, we have two options to run:

1. Run via "Package Explorer":
   1. In the Package Explorer, right click on the dbc project.
   2. Navigate to "Run As - Spring Boot App".


If everything went well, you should be able to access the web app here: http://localhost:9090


## Authors

* **BENSASSI TAREK** - *Main Developer* - [tarek.b](https://gitlab.com/tarekbensassi)


## License

Ce projet est sous licence MIT -