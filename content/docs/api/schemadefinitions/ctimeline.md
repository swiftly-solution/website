---
title: CTimeline
---

# Interface CTimeline

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CTimeline : IntervalTimer, ISchemaClass<IntervalTimer>, ISchemaClass<CTimeline>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [IntervalTimer](/docs/api/schemadefinitions/intervaltimer)
- [ISchemaClass<IntervalTimer>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CTimeline>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BucketCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L22)

```csharp
ref int BucketCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CompressionType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L28)

```csharp
ref TimelineCompression_t CompressionType { get; }
```

#### Property Value

- [TimelineCompression_t](/docs/api/schemadefinitions/timelinecompression_t)

### FinalValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L26)

```csharp
ref float FinalValue { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Interval

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L24)

```csharp
ref float Interval { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Stopped

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L30)

```csharp
ref bool Stopped { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ValueCounts

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L20)

```csharp
ISchemaFixedArray<int> ValueCounts { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### Values

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L18)

```csharp
ISchemaFixedArray<float> Values { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

## Methods

### BucketCountUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L34)

```csharp
void BucketCountUpdated()
```

### CompressionTypeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L37)

```csharp
void CompressionTypeUpdated()
```

### FinalValueUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L36)

```csharp
void FinalValueUpdated()
```

### IntervalUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L35)

```csharp
void IntervalUpdated()
```

### StoppedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L38)

```csharp
void StoppedUpdated()
```

### ValueCountsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L33)

```csharp
void ValueCountsUpdated()
```

### ValuesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L32)

```csharp
void ValuesUpdated()
```

