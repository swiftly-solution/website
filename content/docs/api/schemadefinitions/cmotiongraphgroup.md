---
title: CMotionGraphGroup
---

# Interface CMotionGraphGroup

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraphGroup.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMotionGraphGroup : ISchemaClass<CMotionGraphGroup>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CMotionGraphGroup>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### IsActiveScript

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraphGroup.cs#L26)

```csharp
AnimScriptHandle IsActiveScript { get; }
```

#### Property Value

- [AnimScriptHandle](/docs/api/schemadefinitions/animscripthandle)

### MotionGraphConfigs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraphGroup.cs#L22)

```csharp
ref CUtlVector<CMotionGraphConfig> MotionGraphConfigs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CMotionGraphConfig](/docs/api/schemadefinitions/cmotiongraphconfig)>

### MotionGraphs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraphGroup.cs#L20)

```csharp
ref CUtlVector<SchemaUntypedField> MotionGraphs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[SchemaUntypedField](/docs/api/schemas/schemauntypedfield)>

### SampleToConfig

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraphGroup.cs#L24)

```csharp
ref CUtlVector<int> SampleToConfig { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### SearchDB

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraphGroup.cs#L18)

```csharp
CMotionSearchDB SearchDB { get; }
```

#### Property Value

- [CMotionSearchDB](/docs/api/schemadefinitions/cmotionsearchdb)

