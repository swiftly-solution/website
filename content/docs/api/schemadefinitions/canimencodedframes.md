---
title: CAnimEncodedFrames
---

# Interface CAnimEncodedFrames

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodedFrames.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CAnimEncodedFrames : ISchemaClass<CAnimEncodedFrames>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CAnimEncodedFrames>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### FileName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodedFrames.cs#L18)

```csharp
ref CBufferString FileName { get; }
```

#### Property Value

- [CBufferString](/docs/api/natives/cbufferstring)

### FrameblockArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodedFrames.cs#L24)

```csharp
ref CUtlVector<CAnimFrameBlockAnim> FrameblockArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CAnimFrameBlockAnim](/docs/api/schemadefinitions/canimframeblockanim)>

### Frames

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodedFrames.cs#L20)

```csharp
ref int Frames { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FramesPerBlock

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodedFrames.cs#L22)

```csharp
ref int FramesPerBlock { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UsageDifferences

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodedFrames.cs#L26)

```csharp
CAnimEncodeDifference UsageDifferences { get; }
```

#### Property Value

- [CAnimEncodeDifference](/docs/api/schemadefinitions/canimencodedifference)

