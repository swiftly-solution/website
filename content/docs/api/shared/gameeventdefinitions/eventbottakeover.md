---
title: EventBotTakeover
---

```csharp
public interface EventBotTakeover : IGameEvent<EventBotTakeover>
```

- Implements

## Properties

### **BotID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBotTakeover.cs#L42)

```csharp
int BotID { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **P** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBotTakeover.cs#L47)

```csharp
float P { get; set; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **R** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBotTakeover.cs#L57)

```csharp
float R { get; set; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **UserId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBotTakeover.cs#L37)

```csharp
int UserId { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **UserIdController** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBotTakeover.cs#L22)

```csharp
CCSPlayerController UserIdController { get; }
```

- Property Value

- [CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)

### **UserIdPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBotTakeover.cs#L28)

```csharp
CCSPlayerPawn UserIdPawn { get; }
```

- Property Value

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)

### **UserIdPlayer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBotTakeover.cs#L31)

```csharp
IPlayer UserIdPlayer { get; }
```

- Property Value

- [IPlayer](/docs/api/shared/players/iplayer)

### **Y** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBotTakeover.cs#L52)

```csharp
float Y { get; set; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

