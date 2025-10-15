---
title: CVectorAnimParameter
---

```csharp
public interface CVectorAnimParameter : CConcreteAnimParameter, CAnimParameterBase, ISchemaClass<CAnimParameterBase>, ISchemaClass<CConcreteAnimParameter>, ISchemaClass<CVectorAnimParameter>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DefaultValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVectorAnimParameter.cs#L17)

```csharp
ref Vector DefaultValue { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Interpolate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVectorAnimParameter.cs#L19)

```csharp
ref bool Interpolate { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### VectorType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVectorAnimParameter.cs#L21)

```csharp
ref AnimParamVectorType_t VectorType { get; }
```

#### Property Value

- [AnimParamVectorType_t](/docs/api/shared/schemadefinitions/animparamvectortype_t)

