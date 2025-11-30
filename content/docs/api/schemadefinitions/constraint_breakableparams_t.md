---
title: constraint_breakableparams_t
---

# Interface constraint_breakableparams_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/constraint_breakableparams_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface constraint_breakableparams_t : ISchemaClass<constraint_breakableparams_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<constraint_breakableparams_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BodyMassScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/constraint_breakableparams_t.cs#L24)

```csharp
ISchemaFixedArray<float> BodyMassScale { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### ForceLimit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/constraint_breakableparams_t.cs#L20)

```csharp
ref float ForceLimit { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IsActive

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/constraint_breakableparams_t.cs#L26)

```csharp
ref bool IsActive { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Strength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/constraint_breakableparams_t.cs#L18)

```csharp
ref float Strength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TorqueLimit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/constraint_breakableparams_t.cs#L22)

```csharp
ref float TorqueLimit { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

