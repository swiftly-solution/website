---
title: CTimeline
---

```csharp
public interface CTimeline : IntervalTimer, ISchemaClass<IntervalTimer>, ISchemaClass<CTimeline>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BucketCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L21)

```csharp
ref int BucketCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CompressionType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L27)

```csharp
ref TimelineCompression_t CompressionType { get; }
```

#### Property Value

- [TimelineCompression_t](/docs/api/shared/schemadefinitions/timelinecompression_t)

### FinalValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L25)

```csharp
ref float FinalValue { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Interval

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L23)

```csharp
ref float Interval { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Stopped

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L29)

```csharp
ref bool Stopped { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ValueCounts

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L19)

```csharp
ISchemaFixedArray<int> ValueCounts { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### Values

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L17)

```csharp
ISchemaFixedArray<float> Values { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

## Methods

### BucketCountUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L33)

```csharp
void BucketCountUpdated()
```

### CompressionTypeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L36)

```csharp
void CompressionTypeUpdated()
```

### FinalValueUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L35)

```csharp
void FinalValueUpdated()
```

### IntervalUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L34)

```csharp
void IntervalUpdated()
```

### StoppedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L37)

```csharp
void StoppedUpdated()
```

### ValueCountsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L32)

```csharp
void ValueCountsUpdated()
```

### ValuesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L31)

```csharp
void ValuesUpdated()
```

