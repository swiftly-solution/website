---
title: CAnimData
---

```csharp
public interface CAnimData : ISchemaClass<CAnimData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AnimArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimData.cs#L20)

```csharp
ref CUtlVector<CAnimDesc> AnimArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimDesc](/docs/api/shared/schemadefinitions/canimdesc)>

### DecoderArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimData.cs#L22)

```csharp
ref CUtlVector<CAnimDecoder> DecoderArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimDecoder](/docs/api/shared/schemadefinitions/canimdecoder)>

### MaxUniqueFrameIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimData.cs#L24)

```csharp
ref int MaxUniqueFrameIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimData.cs#L18)

```csharp
ref CBufferString Name { get; }
```

#### Property Value

- [CBufferString](/docs/api/shared/natives/cbufferstring)

### SegmentArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimData.cs#L26)

```csharp
ref CUtlVector<CAnimFrameSegment> SegmentArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimFrameSegment](/docs/api/shared/schemadefinitions/canimframesegment)>

