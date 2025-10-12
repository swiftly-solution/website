---
title: EventSmokeBeaconParadrop
---

```csharp
public interface EventSmokeBeaconParadrop : IGameEvent<EventSmokeBeaconParadrop>
```

- Implements

## Properties

### **ParaDrop** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventSmokeBeaconParadrop.cs#L42)

```csharp
short ParaDrop { get; set; }
```

- Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### **UserId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventSmokeBeaconParadrop.cs#L37)

```csharp
int UserId { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **UserIdController** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventSmokeBeaconParadrop.cs#L22)

```csharp
CCSPlayerController UserIdController { get; }
```

- Property Value

- [CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)

### **UserIdPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventSmokeBeaconParadrop.cs#L28)

```csharp
CCSPlayerPawn UserIdPawn { get; }
```

- Property Value

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)

### **UserIdPlayer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventSmokeBeaconParadrop.cs#L31)

```csharp
IPlayer UserIdPlayer { get; }
```

- Property Value

- [IPlayer](/docs/api/shared/players/iplayer)

