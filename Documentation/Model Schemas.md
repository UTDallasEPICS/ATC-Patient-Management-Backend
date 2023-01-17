## Schemas
The following Mongoose schemas are defined in `./models/schmea_name.ts`

```mermaid
classDiagram
    class Administrator {
        +String beakColor
        +String lastName
        +String email
        +String phoneNumber
        +boolean isTherapist
        +Patient[] patients

        updateSelf(this : DocumentType~Administrator~, data : any) : this.save()
    }
```
<br/><br/>

```mermaid
classDiagram
    class BehaviorInSession~interface~{
        String name
        String description
        String dataclass
    }

    class IBehavior~interface~{
        String name
        String description
        String datatype
    }

    class Behavior {
        +String name
        +String description
        +String datatype

        updateSelf(this : DocumentType~Behavior~, data : any) : this.save()
    }

    IBehavior <-- Behavior
```

<br/><br/>

```mermaid
classDiagram
    class Patient {
        +String firstName
        +String lastName
        +String email
        +String parentPhone
        +String parentEmail
        +Date birthday

        +Program program
        +Report report
        +Therapist therapist
        +Administrator administrator

        updateSelf(this : DocumentType~Patient~, data : any) : this.save()
    }
```

<br/><br/>

```mermaid
classDiagram
    class Program {
        +Patient patient
        +WithID~IBehavior~[] behavior

        updateSelf(this : DocumentType~Program~, data : any) : this.save()
        findOrCreate(this : ReturnModelType~typeof Program~, DocumentType~Patient~ dwa) program
        addBehavior(this: DocumentType~Program~, behavior: IBehavior) : this.save()
    }
```

<br/><br/>

```mermaid
classDiagram
    class Index {
        No Schema But Exports These Objects:
        \n
        Therapist, therapistModel,
        Behavior, behaviorModel,
        Patient, patientModel,
        Administrator, administratorModel,
        Program, programModel,
        Report, reportModel
    }
```

<br/><br/>

```mermaid
classDiagram
    class Report {
        +Date sessionTime
        +object data
        +Patient patient
        +Therapist therapist
        +BehaviorInSession[] behaviors

        updateSelf(this : DocumentType~Report~, data : any) : this.save()
        createFromProgram(this: ReturnModelType~typeof Report~, program: Program) report
    }
```

<br/><br/>

```mermaid
classDiagram
    class Therapist {
        +String firstName
        +String lastName
        +String email
        +String username
        +String password
        +String phoneNUmber
        +boolean isAdmin
        +Patient[] patients

        updateSelf(this : DocumentType~Therapist~, data : any) : this.save()
    }
```