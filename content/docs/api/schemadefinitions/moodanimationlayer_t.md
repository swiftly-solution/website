---
title: MoodAnimationLayer_t
---

# Interface MoodAnimationLayer_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface MoodAnimationLayer_t : ISchemaClass<MoodAnimationLayer_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<MoodAnimationLayer_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ActiveListening

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L20)

```csharp
ref bool ActiveListening { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ActiveTalking

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L22)

```csharp
ref bool ActiveTalking { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DurationScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L28)

```csharp
CRangeFloat DurationScale { get; }
```

#### Property Value

- [CRangeFloat](/docs/api/schemadefinitions/crangefloat)

### EndOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L36)

```csharp
CRangeFloat EndOffset { get; }
```

#### Property Value

- [CRangeFloat](/docs/api/schemadefinitions/crangefloat)

### FadeIn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L38)

```csharp
ref float FadeIn { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FadeOut

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L40)

```csharp
ref float FadeOut { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Intensity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L26)

```csharp
CRangeFloat Intensity { get; }
```

#### Property Value

- [CRangeFloat](/docs/api/schemadefinitions/crangefloat)

### LayerAnimations

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L24)

```csharp
ref CUtlVector<MoodAnimation_t> LayerAnimations { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[MoodAnimation_t](/docs/api/schemadefinitions/moodanimation_t)>

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L18)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NextStart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L32)

```csharp
CRangeFloat NextStart { get; }
```

#### Property Value

- [CRangeFloat](/docs/api/schemadefinitions/crangefloat)

### ScaleWithInts

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L30)

```csharp
ref bool ScaleWithInts { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L34)

```csharp
CRangeFloat StartOffset { get; }
```

#### Property Value

- [CRangeFloat](/docs/api/schemadefinitions/crangefloat)

