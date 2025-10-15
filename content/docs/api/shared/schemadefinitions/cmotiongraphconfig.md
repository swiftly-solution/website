---
title: CMotionGraphConfig
---

```csharp
public interface CMotionGraphConfig : ISchemaClass<CMotionGraphConfig>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Duration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraphConfig.cs#L19)

```csharp
ref float Duration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MotionIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraphConfig.cs#L21)

```csharp
MotionIndex MotionIndex { get; }
```

#### Property Value

- [MotionIndex](/docs/api/shared/schemadefinitions/motionindex)

### ParamValues

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraphConfig.cs#L17)

```csharp
ISchemaFixedArray<float> ParamValues { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### SampleCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraphConfig.cs#L25)

```csharp
ref int SampleCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SampleStart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraphConfig.cs#L23)

```csharp
ref int SampleStart { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

