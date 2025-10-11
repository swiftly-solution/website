---
title: EventPlayerFullUpdate
---

```csharp
public interface EventPlayerFullUpdate : IGameEvent<EventPlayerFullUpdate>
```

#### Implements

## Properties

### **Count** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerFullUpdate.cs#L48)

```csharp
short Count { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### **UserId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerFullUpdate.cs#L41)

```csharp
int UserId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **UserIdController** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerFullUpdate.cs#L23)

```csharp
CCSPlayerController UserIdController { get; }
```

#### Property Value

- [CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)

### **UserIdPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerFullUpdate.cs#L30)

```csharp
CCSPlayerPawn UserIdPawn { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)

### **UserIdPlayer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerFullUpdate.cs#L34)

```csharp
IPlayer UserIdPlayer { get; }
```

#### Property Value

- [IPlayer](/docs/api/shared/players/iplayer)

