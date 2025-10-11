---
title: EventInstructorCloseLesson
---

```csharp
public interface EventInstructorCloseLesson : IGameEvent<EventInstructorCloseLesson>
```

#### Implements

## Properties

### **HintName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventInstructorCloseLesson.cs#L48)

```csharp
string HintName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **UserId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventInstructorCloseLesson.cs#L41)

```csharp
int UserId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **UserIdController** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventInstructorCloseLesson.cs#L23)

```csharp
CCSPlayerController UserIdController { get; }
```

#### Property Value

- [CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)

### **UserIdPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventInstructorCloseLesson.cs#L30)

```csharp
CCSPlayerPawn UserIdPawn { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)

### **UserIdPlayer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventInstructorCloseLesson.cs#L34)

```csharp
IPlayer UserIdPlayer { get; }
```

#### Property Value

- [IPlayer](/docs/api/shared/players/iplayer)

