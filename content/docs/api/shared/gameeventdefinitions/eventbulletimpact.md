---
title: EventBulletImpact
---

```csharp
public interface EventBulletImpact : IGameEvent<EventBulletImpact>
```

- Implements

## Properties

### **UserId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletImpact.cs#L37)

```csharp
int UserId { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **UserIdController** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletImpact.cs#L22)

```csharp
CCSPlayerController UserIdController { get; }
```

- Property Value

- [CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)

### **UserIdPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletImpact.cs#L28)

```csharp
CCSPlayerPawn UserIdPawn { get; }
```

- Property Value

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)

### **UserIdPlayer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletImpact.cs#L31)

```csharp
IPlayer UserIdPlayer { get; }
```

- Property Value

- [IPlayer](/docs/api/shared/players/iplayer)

### **X** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletImpact.cs#L42)

```csharp
float X { get; set; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Y** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletImpact.cs#L47)

```csharp
float Y { get; set; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Z** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletImpact.cs#L52)

```csharp
float Z { get; set; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

