---
title: CCSUsrMsg_Damage
---

```csharp
public interface CCSUsrMsg_Damage : ITypedProtobuf<CCSUsrMsg_Damage>, INativeHandle, INetMessage<CCSUsrMsg_Damage>, IDisposable
```

#### Implements

## Properties

**Amount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_Damage.cs#L18)

```csharp
int Amount { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**InflictorWorldPos** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_Damage.cs#L21)

```csharp
Vector InflictorWorldPos { get; set; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**VictimEntindex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_Damage.cs#L24)

```csharp
int VictimEntindex { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

