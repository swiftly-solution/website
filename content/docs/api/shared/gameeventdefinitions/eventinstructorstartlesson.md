---
title: EventInstructorStartLesson
---

```csharp
public interface EventInstructorStartLesson : IGameEvent<EventInstructorStartLesson>
```

#### Implements

## Properties

### **HintName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventInstructorStartLesson.cs#L48)

```csharp
string HintName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **HintTarget** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventInstructorStartLesson.cs#L55)

```csharp
int HintTarget { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **UserId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventInstructorStartLesson.cs#L41)

```csharp
int UserId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **UserIdController** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventInstructorStartLesson.cs#L23)

```csharp
CCSPlayerController UserIdController { get; }
```

#### Property Value

- [CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)

### **UserIdPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventInstructorStartLesson.cs#L30)

```csharp
CCSPlayerPawn UserIdPawn { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)

### **UserIdPlayer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventInstructorStartLesson.cs#L34)

```csharp
IPlayer UserIdPlayer { get; }
```

#### Property Value

- [IPlayer](/docs/api/shared/players/iplayer)

### **VrControllerType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventInstructorStartLesson.cs#L70)

```csharp
byte VrControllerType { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### **VrMovementType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventInstructorStartLesson.cs#L60)

```csharp
byte VrMovementType { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### **VrSingleController** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventInstructorStartLesson.cs#L65)

```csharp
bool VrSingleController { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

