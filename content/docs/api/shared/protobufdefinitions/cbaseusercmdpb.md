---
title: CBaseUserCmdPB
---

```csharp
public interface CBaseUserCmdPB : ITypedProtobuf<CBaseUserCmdPB>, INativeHandle
```

#### Implements

## Properties

**ButtonsPb** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L22)

```csharp
CInButtonStatePB ButtonsPb { get; }
```

#### Property Value

- [CInButtonStatePB](/docs/api/shared/protobufdefinitions/cinbuttonstatepb)

**ClientTick** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L16)

```csharp
int ClientTick { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**CmdFlags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L64)

```csharp
int CmdFlags { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**ConsumedServerAngleChanges** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L61)

```csharp
uint ConsumedServerAngleChanges { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Forwardmove** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L28)

```csharp
float Forwardmove { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Impulse** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L37)

```csharp
int Impulse { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Leftmove** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L31)

```csharp
float Leftmove { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**LegacyCommandNumber** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L13)

```csharp
int LegacyCommandNumber { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Mousedx** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L46)

```csharp
int Mousedx { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Mousedy** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L49)

```csharp
int Mousedy { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**MoveCrc** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L58)

```csharp
byte[] MoveCrc { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

**PawnEntityHandle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L52)

```csharp
uint PawnEntityHandle { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**PredictionOffsetTicksX256** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L19)

```csharp
uint PredictionOffsetTicksX256 { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**RandomSeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L43)

```csharp
int RandomSeed { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**SubtickMoves** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L55)

```csharp
IProtobufRepeatedFieldSubMessageType<CSubtickMoveStep> SubtickMoves { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CSubtickMoveStep](/docs/api/shared/protobufdefinitions/csubtickmovestep)>

**Upmove** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L34)

```csharp
float Upmove { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Viewangles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L25)

```csharp
QAngle Viewangles { get; set; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

**Weaponselect** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L40)

```csharp
int Weaponselect { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

