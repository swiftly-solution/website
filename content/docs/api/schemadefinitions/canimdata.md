---
title: CAnimData
---

# Interface CAnimData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimData.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CAnimData : ISchemaClass<CAnimData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CAnimData>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AnimArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimData.cs#L20)

```csharp
ref CUtlVector<CAnimDesc> AnimArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CAnimDesc](/docs/api/schemadefinitions/canimdesc)>

### DecoderArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimData.cs#L22)

```csharp
ref CUtlVector<CAnimDecoder> DecoderArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CAnimDecoder](/docs/api/schemadefinitions/canimdecoder)>

### MaxUniqueFrameIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimData.cs#L24)

```csharp
ref int MaxUniqueFrameIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimData.cs#L18)

```csharp
ref CBufferString Name { get; }
```

#### Property Value

- [CBufferString](/docs/api/natives/cbufferstring)

### SegmentArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimData.cs#L26)

```csharp
ref CUtlVector<CAnimFrameSegment> SegmentArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CAnimFrameSegment](/docs/api/schemadefinitions/canimframesegment)>

