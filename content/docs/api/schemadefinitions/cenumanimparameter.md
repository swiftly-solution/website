---
title: CEnumAnimParameter
---

# Interface CEnumAnimParameter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnumAnimParameter.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CEnumAnimParameter : CConcreteAnimParameter, CAnimParameterBase, ISchemaClass<CAnimParameterBase>, ISchemaClass<CConcreteAnimParameter>, ISchemaClass<CEnumAnimParameter>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CConcreteAnimParameter](/docs/api/schemadefinitions/cconcreteanimparameter)
- [CAnimParameterBase](/docs/api/schemadefinitions/canimparameterbase)
- [ISchemaClass<CAnimParameterBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CConcreteAnimParameter>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CEnumAnimParameter>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DefaultValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnumAnimParameter.cs#L18)

```csharp
ref byte DefaultValue { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### EnumOptions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnumAnimParameter.cs#L20)

```csharp
ref CUtlVector<CUtlString> EnumOptions { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlString](/docs/api/natives/cutlstring)>

### EnumReferenced

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnumAnimParameter.cs#L22)

```csharp
ref CUtlVector<ulong> EnumReferenced { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ulong](https://learn.microsoft.com/dotnet/api/system.uint64)>

