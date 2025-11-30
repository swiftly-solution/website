---
title: CFuseSymbolTable
---

# Interface CFuseSymbolTable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseSymbolTable.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CFuseSymbolTable : ISchemaClass<CFuseSymbolTable>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CFuseSymbolTable>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ConstantMap

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseSymbolTable.cs#L25)

```csharp
SchemaUntypedField ConstantMap { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### Constants

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseSymbolTable.cs#L18)

```csharp
ref CUtlVector<ConstantInfo_t> Constants { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ConstantInfo_t](/docs/api/schemadefinitions/constantinfo_t)>

### FunctionMap

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseSymbolTable.cs#L31)

```csharp
SchemaUntypedField FunctionMap { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### Functions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseSymbolTable.cs#L22)

```csharp
ref CUtlVector<FunctionInfo_t> Functions { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FunctionInfo_t](/docs/api/schemadefinitions/functioninfo_t)>

### VariableMap

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseSymbolTable.cs#L28)

```csharp
SchemaUntypedField VariableMap { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### Variables

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseSymbolTable.cs#L20)

```csharp
ref CUtlVector<VariableInfo_t> Variables { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[VariableInfo_t](/docs/api/schemadefinitions/variableinfo_t)>

