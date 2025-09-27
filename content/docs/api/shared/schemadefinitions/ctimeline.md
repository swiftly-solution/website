---
title: CTimeline
---

```csharp
public interface CTimeline : IntervalTimer, ISchemaClass<IntervalTimer>, ISchemaClass<CTimeline>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**BucketCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L20)

```csharp
ref int BucketCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**CompressionType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L26)

```csharp
ref TimelineCompression_t CompressionType { get; }
```

#### Property Value

- [TimelineCompression_t](/docs/api/shared/schemadefinitions/timelinecompression_t)

**FinalValue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L24)

```csharp
ref float FinalValue { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Interval** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L22)

```csharp
ref float Interval { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Stopped** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L28)

```csharp
ref bool Stopped { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**ValueCounts** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L18)

```csharp
ISchemaFixedArray<int> ValueCounts { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

**Values** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L16)

```csharp
ISchemaFixedArray<float> Values { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

## Methods

**BucketCountUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L32)

```csharp
void BucketCountUpdated()
```

**CompressionTypeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L35)

```csharp
void CompressionTypeUpdated()
```

**FinalValueUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L34)

```csharp
void FinalValueUpdated()
```

**IntervalUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L33)

```csharp
void IntervalUpdated()
```

**StoppedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L36)

```csharp
void StoppedUpdated()
```

**ValueCountsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L31)

```csharp
void ValueCountsUpdated()
```

**ValuesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeline.cs#L30)

```csharp
void ValuesUpdated()
```

