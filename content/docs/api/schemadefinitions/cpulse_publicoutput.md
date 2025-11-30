---
title: CPulse_PublicOutput
---

# Interface CPulse_PublicOutput

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_PublicOutput.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPulse_PublicOutput : ISchemaClass<CPulse_PublicOutput>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CPulse_PublicOutput>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Args

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_PublicOutput.cs#L23)

```csharp
ref CUtlLeanVector<CPulseRuntimeMethodArg, int> Args { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/natives/cutlleanvectortt)<[CPulseRuntimeMethodArg](/docs/api/schemadefinitions/cpulseruntimemethodarg), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### Description

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_PublicOutput.cs#L21)

```csharp
string Description { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_PublicOutput.cs#L19)

```csharp
SchemaUntypedField Name { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

