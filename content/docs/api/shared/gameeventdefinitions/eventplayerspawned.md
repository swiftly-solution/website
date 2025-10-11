---
title: EventPlayerSpawned
---

```csharp
public interface EventPlayerSpawned : IGameEvent<EventPlayerSpawned>
```

#### Implements

## Properties

### **InRestart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerSpawned.cs#L44)

```csharp
bool InRestart { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **UserId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerSpawned.cs#L37)

```csharp
int UserId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **UserIdController** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerSpawned.cs#L22)

```csharp
CCSPlayerController UserIdController { get; }
```

#### Property Value

- [CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)

### **UserIdPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerSpawned.cs#L28)

```csharp
CCSPlayerPawn UserIdPawn { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)

### **UserIdPlayer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerSpawned.cs#L31)

```csharp
IPlayer UserIdPlayer { get; }
```

#### Property Value

- [IPlayer](/docs/api/shared/players/iplayer)

