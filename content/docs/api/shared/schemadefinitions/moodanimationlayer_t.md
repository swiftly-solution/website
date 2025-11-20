---
title: MoodAnimationLayer_t
---

```csharp
public interface MoodAnimationLayer_t : ISchemaClass<MoodAnimationLayer_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ActiveListening

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L20)

```csharp
ref bool ActiveListening { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ActiveTalking

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L22)

```csharp
ref bool ActiveTalking { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DurationScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L28)

```csharp
CRangeFloat DurationScale { get; }
```

#### Property Value

- [CRangeFloat](/docs/api/shared/schemadefinitions/crangefloat)

### EndOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L36)

```csharp
CRangeFloat EndOffset { get; }
```

#### Property Value

- [CRangeFloat](/docs/api/shared/schemadefinitions/crangefloat)

### FadeIn

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L38)

```csharp
ref float FadeIn { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FadeOut

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L40)

```csharp
ref float FadeOut { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Intensity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L26)

```csharp
CRangeFloat Intensity { get; }
```

#### Property Value

- [CRangeFloat](/docs/api/shared/schemadefinitions/crangefloat)

### LayerAnimations

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L24)

```csharp
ref CUtlVector<MoodAnimation_t> LayerAnimations { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[MoodAnimation_t](/docs/api/shared/schemadefinitions/moodanimation_t)>

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L18)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NextStart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L32)

```csharp
CRangeFloat NextStart { get; }
```

#### Property Value

- [CRangeFloat](/docs/api/shared/schemadefinitions/crangefloat)

### ScaleWithInts

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L30)

```csharp
ref bool ScaleWithInts { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MoodAnimationLayer_t.cs#L34)

```csharp
CRangeFloat StartOffset { get; }
```

#### Property Value

- [CRangeFloat](/docs/api/shared/schemadefinitions/crangefloat)

