---
title: CCSUsrMsg_DamagePrediction
---

# Interface CCSUsrMsg_DamagePrediction

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_DamagePrediction.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSUsrMsg_DamagePrediction : ITypedProtobuf<CCSUsrMsg_DamagePrediction>, INativeHandle, INetMessage<CCSUsrMsg_DamagePrediction>, IDisposable
```

#### Implements

- [ITypedProtobuf<CCSUsrMsg_DamagePrediction>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CCSUsrMsg_DamagePrediction>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### AimPunch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_DamagePrediction.cs#L39)

```csharp
QAngle AimPunch { get; set; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### CommandNum

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_DamagePrediction.cs#L18)

```csharp
int CommandNum { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PelletIdx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_DamagePrediction.cs#L21)

```csharp
int PelletIdx { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ShootDir

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_DamagePrediction.cs#L36)

```csharp
QAngle ShootDir { get; set; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### ShootPos

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_DamagePrediction.cs#L33)

```csharp
Vector ShootPos { get; set; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### VictimDamage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_DamagePrediction.cs#L30)

```csharp
int VictimDamage { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### VictimSlot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_DamagePrediction.cs#L24)

```csharp
int VictimSlot { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### VictimStartingHealth

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_DamagePrediction.cs#L27)

```csharp
int VictimStartingHealth { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

