---
title: CNmClip
---

```csharp
public interface CNmClip : ISchemaClass<CNmClip>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CompressedFloatCurveData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L34)

```csharp
ref CUtlVector<ushort> CompressedFloatCurveData { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### CompressedFloatCurveOffsets

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L36)

```csharp
ref CUtlVector<uint> CompressedFloatCurveOffsets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### CompressedPoseData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L24)

```csharp
ref CUtlBinaryBlock CompressedPoseData { get; }
```

#### Property Value

- [CUtlBinaryBlock](/docs/api/shared/natives/cutlbinaryblock)

### CompressedPoseOffsets

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L28)

```csharp
ref CUtlVector<uint> CompressedPoseOffsets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### Duration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L22)

```csharp
ref float Duration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FloatCurveDefs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L32)

```csharp
ref CUtlVector<NmFloatCurveCompressionSettings_t> FloatCurveDefs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[NmFloatCurveCompressionSettings_t](/docs/api/shared/schemadefinitions/nmfloatcurvecompressionsettings_t)>

### FloatCurveIDs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L30)

```csharp
ref CUtlVector<CGlobalSymbol> FloatCurveIDs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)>

### IsAdditive

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L45)

```csharp
ref bool IsAdditive { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ModelSpaceBoneSamplingIndices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L49)

```csharp
ref CUtlVector<int> ModelSpaceBoneSamplingIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### ModelSpaceSamplingChain

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L47)

```csharp
ref CUtlVector<CNmClip__ModelSpaceSamplingChainLink_t> ModelSpaceSamplingChain { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CNmClip__ModelSpaceSamplingChainLink_t](/docs/api/shared/schemadefinitions/cnmclip__modelspacesamplingchainlink_t)>

### NumFrames

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L20)

```csharp
ref uint NumFrames { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### RootMotion

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L43)

```csharp
CNmRootMotionData RootMotion { get; }
```

#### Property Value

- [CNmRootMotionData](/docs/api/shared/schemadefinitions/cnmrootmotiondata)

### SecondaryAnimations

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L39)

```csharp
SchemaUntypedField SecondaryAnimations { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Skeleton

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L18)

```csharp
ref CStrongHandle<InfoForResourceTypeCNmSkeleton> Skeleton { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCNmSkeleton](/docs/api/shared/schemadefinitions/infoforresourcetypecnmskeleton)>

### SyncTrack

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L41)

```csharp
CNmSyncTrack SyncTrack { get; }
```

#### Property Value

- [CNmSyncTrack](/docs/api/shared/schemadefinitions/cnmsynctrack)

### TrackCompressionSettings

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmClip.cs#L26)

```csharp
ref CUtlVector<NmCompressionSettings_t> TrackCompressionSettings { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[NmCompressionSettings_t](/docs/api/shared/schemadefinitions/nmcompressionsettings_t)>

