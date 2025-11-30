---
title: CSGOInputHistoryEntryPB
---

# Interface CSGOInputHistoryEntryPB

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSGOInputHistoryEntryPB : ITypedProtobuf<CSGOInputHistoryEntryPB>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CSGOInputHistoryEntryPB>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ClInterp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L28)

```csharp
CSGOInterpolationInfoPB_CL ClInterp { get; }
```

#### Property Value

- [CSGOInterpolationInfoPB_CL](/docs/api/protobufdefinitions/csgointerpolationinfopb_cl)

### FrameNumber

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L40)

```csharp
int FrameNumber { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlayerInterp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L37)

```csharp
CSGOInterpolationInfoPB PlayerInterp { get; }
```

#### Property Value

- [CSGOInterpolationInfoPB](/docs/api/protobufdefinitions/csgointerpolationinfopb)

### PlayerTickCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L22)

```csharp
int PlayerTickCount { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlayerTickFraction

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L25)

```csharp
float PlayerTickFraction { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RenderTickCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L16)

```csharp
int RenderTickCount { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RenderTickFraction

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L19)

```csharp
float RenderTickFraction { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ShootPosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L46)

```csharp
Vector ShootPosition { get; set; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### SvInterp0

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L31)

```csharp
CSGOInterpolationInfoPB SvInterp0 { get; }
```

#### Property Value

- [CSGOInterpolationInfoPB](/docs/api/protobufdefinitions/csgointerpolationinfopb)

### SvInterp1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L34)

```csharp
CSGOInterpolationInfoPB SvInterp1 { get; }
```

#### Property Value

- [CSGOInterpolationInfoPB](/docs/api/protobufdefinitions/csgointerpolationinfopb)

### TargetAbsAngCheck

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L55)

```csharp
QAngle TargetAbsAngCheck { get; set; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### TargetAbsPosCheck

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L52)

```csharp
Vector TargetAbsPosCheck { get; set; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### TargetEntIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L43)

```csharp
int TargetEntIndex { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TargetHeadPosCheck

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L49)

```csharp
Vector TargetHeadPosCheck { get; set; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### ViewAngles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L13)

```csharp
QAngle ViewAngles { get; set; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

