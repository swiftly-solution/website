---
title: CPulseCell_Inflow_Method
---

```csharp
public interface CPulseCell_Inflow_Method : CPulseCell_Inflow_BaseEntrypoint, CPulseCell_BaseFlow, CPulseCell_Base, ISchemaClass<CPulseCell_Base>, ISchemaClass<CPulseCell_BaseFlow>, ISchemaClass<CPulseCell_Inflow_BaseEntrypoint>, ISchemaClass<CPulseCell_Inflow_Method>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Args

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Inflow_Method.cs#L27)

```csharp
ref CUtlLeanVector<CPulseRuntimeMethodArg, int> Args { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/shared/natives/cutlleanvector-2)<[CPulseRuntimeMethodArg](/docs/api/shared/schemadefinitions/cpulseruntimemethodarg), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### Description

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Inflow_Method.cs#L20)

```csharp
string Description { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### IsPublic

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Inflow_Method.cs#L22)

```csharp
ref bool IsPublic { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MethodName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Inflow_Method.cs#L18)

```csharp
SchemaUntypedField MethodName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### ReturnType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Inflow_Method.cs#L25)

```csharp
SchemaUntypedField ReturnType { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

