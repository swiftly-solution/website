---
title: CNmClip
---

# Interface CNmClip

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNmClip : ISchemaClass<CNmClip>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CNmClip>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CompressedFloatCurveData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L34)

```csharp
ref CUtlVector<ushort> CompressedFloatCurveData { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### CompressedFloatCurveOffsets

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L36)

```csharp
ref CUtlVector<uint> CompressedFloatCurveOffsets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### CompressedPoseData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L24)

```csharp
ref CUtlBinaryBlock CompressedPoseData { get; }
```

#### Property Value

- [CUtlBinaryBlock](/docs/api/natives/cutlbinaryblock)

### CompressedPoseOffsets

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L28)

```csharp
ref CUtlVector<uint> CompressedPoseOffsets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### Duration

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L22)

```csharp
ref float Duration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FloatCurveDefs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L32)

```csharp
ref CUtlVector<NmFloatCurveCompressionSettings_t> FloatCurveDefs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[NmFloatCurveCompressionSettings_t](/docs/api/schemadefinitions/nmfloatcurvecompressionsettings_t)>

### FloatCurveIDs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L30)

```csharp
ref CUtlVector<CGlobalSymbol> FloatCurveIDs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CGlobalSymbol](/docs/api/natives/cglobalsymbol)>

### IsAdditive

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L45)

```csharp
ref bool IsAdditive { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ModelSpaceBoneSamplingIndices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L49)

```csharp
ref CUtlVector<int> ModelSpaceBoneSamplingIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### ModelSpaceSamplingChain

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L47)

```csharp
ref CUtlVector<CNmClip__ModelSpaceSamplingChainLink_t> ModelSpaceSamplingChain { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CNmClip__ModelSpaceSamplingChainLink_t](/docs/api/schemadefinitions/cnmclip__modelspacesamplingchainlink_t)>

### NumFrames

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L20)

```csharp
ref uint NumFrames { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### RootMotion

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L43)

```csharp
CNmRootMotionData RootMotion { get; }
```

#### Property Value

- [CNmRootMotionData](/docs/api/schemadefinitions/cnmrootmotiondata)

### SecondaryAnimations

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L39)

```csharp
SchemaUntypedField SecondaryAnimations { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### Skeleton

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L18)

```csharp
ref CStrongHandle<InfoForResourceTypeCNmSkeleton> Skeleton { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCNmSkeleton](/docs/api/schemadefinitions/infoforresourcetypecnmskeleton)>

### SyncTrack

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L41)

```csharp
CNmSyncTrack SyncTrack { get; }
```

#### Property Value

- [CNmSyncTrack](/docs/api/schemadefinitions/cnmsynctrack)

### TrackCompressionSettings

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L26)

```csharp
ref CUtlVector<NmCompressionSettings_t> TrackCompressionSettings { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[NmCompressionSettings_t](/docs/api/schemadefinitions/nmcompressionsettings_t)>

