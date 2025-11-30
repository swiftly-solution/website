---
title: CVectorAnimParameter
---

# Interface CVectorAnimParameter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVectorAnimParameter.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CVectorAnimParameter : CConcreteAnimParameter, CAnimParameterBase, ISchemaClass<CAnimParameterBase>, ISchemaClass<CConcreteAnimParameter>, ISchemaClass<CVectorAnimParameter>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CConcreteAnimParameter](/docs/api/schemadefinitions/cconcreteanimparameter)
- [CAnimParameterBase](/docs/api/schemadefinitions/canimparameterbase)
- [ISchemaClass<CAnimParameterBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CConcreteAnimParameter>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CVectorAnimParameter>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DefaultValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVectorAnimParameter.cs#L18)

```csharp
ref Vector DefaultValue { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Interpolate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVectorAnimParameter.cs#L20)

```csharp
ref bool Interpolate { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### VectorType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVectorAnimParameter.cs#L22)

```csharp
ref AnimParamVectorType_t VectorType { get; }
```

#### Property Value

- [AnimParamVectorType_t](/docs/api/schemadefinitions/animparamvectortype_t)

