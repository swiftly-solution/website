---
title: CMotionGraphGroup
---

```csharp
public interface CMotionGraphGroup : ISchemaClass<CMotionGraphGroup>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### IsActiveScript

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraphGroup.cs#L26)

```csharp
AnimScriptHandle IsActiveScript { get; }
```

#### Property Value

- [AnimScriptHandle](/docs/api/shared/schemadefinitions/animscripthandle)

### MotionGraphConfigs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraphGroup.cs#L22)

```csharp
ref CUtlVector MotionGraphConfigs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### MotionGraphs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraphGroup.cs#L19)

```csharp
ref CUtlVector MotionGraphs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### SampleToConfig

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraphGroup.cs#L24)

```csharp
ref CUtlVector<int> SampleToConfig { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### SearchDB

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraphGroup.cs#L16)

```csharp
CMotionSearchDB SearchDB { get; }
```

#### Property Value

- [CMotionSearchDB](/docs/api/shared/schemadefinitions/cmotionsearchdb)

