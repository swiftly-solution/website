---
title: CMotionGraphGroup
---

```csharp
public interface CMotionGraphGroup : ISchemaClass<CMotionGraphGroup>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### IsActiveScript

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraphGroup.cs#L26)

```csharp
AnimScriptHandle IsActiveScript { get; }
```

#### Property Value

- [AnimScriptHandle](/docs/api/shared/schemadefinitions/animscripthandle)

### MotionGraphConfigs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraphGroup.cs#L22)

```csharp
ref CUtlVector<CMotionGraphConfig> MotionGraphConfigs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CMotionGraphConfig](/docs/api/shared/schemadefinitions/cmotiongraphconfig)>

### MotionGraphs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraphGroup.cs#L20)

```csharp
ref CUtlVector<SchemaUntypedField> MotionGraphs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)>

### SampleToConfig

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraphGroup.cs#L24)

```csharp
ref CUtlVector<int> SampleToConfig { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### SearchDB

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraphGroup.cs#L18)

```csharp
CMotionSearchDB SearchDB { get; }
```

#### Property Value

- [CMotionSearchDB](/docs/api/shared/schemadefinitions/cmotionsearchdb)

