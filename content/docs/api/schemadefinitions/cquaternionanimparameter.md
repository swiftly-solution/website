---
title: CQuaternionAnimParameter
---

# Interface CQuaternionAnimParameter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CQuaternionAnimParameter.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CQuaternionAnimParameter : CConcreteAnimParameter, CAnimParameterBase, ISchemaClass<CAnimParameterBase>, ISchemaClass<CConcreteAnimParameter>, ISchemaClass<CQuaternionAnimParameter>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CConcreteAnimParameter](/docs/api/schemadefinitions/cconcreteanimparameter)
- [CAnimParameterBase](/docs/api/schemadefinitions/canimparameterbase)
- [ISchemaClass<CAnimParameterBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CConcreteAnimParameter>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CQuaternionAnimParameter>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DefaultValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CQuaternionAnimParameter.cs#L18)

```csharp
ref Quaternion DefaultValue { get; }
```

#### Property Value

- [Quaternion](/docs/api/natives/quaternion)

### Interpolate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CQuaternionAnimParameter.cs#L20)

```csharp
ref bool Interpolate { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

