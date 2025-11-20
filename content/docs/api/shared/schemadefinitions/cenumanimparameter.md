---
title: CEnumAnimParameter
---

```csharp
public interface CEnumAnimParameter : CConcreteAnimParameter, CAnimParameterBase, ISchemaClass<CAnimParameterBase>, ISchemaClass<CConcreteAnimParameter>, ISchemaClass<CEnumAnimParameter>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DefaultValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnumAnimParameter.cs#L18)

```csharp
ref byte DefaultValue { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### EnumOptions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnumAnimParameter.cs#L20)

```csharp
ref CUtlVector<CUtlString> EnumOptions { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### EnumReferenced

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnumAnimParameter.cs#L22)

```csharp
ref CUtlVector<ulong> EnumReferenced { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ulong](https://learn.microsoft.com/dotnet/api/system.uint64)>

