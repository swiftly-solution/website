---
title: CPulse_OutflowConnection
---

```csharp
public interface CPulse_OutflowConnection : ISchemaClass<CPulse_OutflowConnection>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DestChunk

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_OutflowConnection.cs#L19)

```csharp
PulseRuntimeChunkIndex_t DestChunk { get; }
```

#### Property Value

- [PulseRuntimeChunkIndex_t](/docs/api/shared/schemadefinitions/pulseruntimechunkindex_t)

### Instruction

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_OutflowConnection.cs#L21)

```csharp
ref int Instruction { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutflowRegisterMap

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_OutflowConnection.cs#L23)

```csharp
PulseRegisterMap_t OutflowRegisterMap { get; }
```

#### Property Value

- [PulseRegisterMap_t](/docs/api/shared/schemadefinitions/pulseregistermap_t)

### SourceOutflowName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_OutflowConnection.cs#L17)

```csharp
SchemaUntypedField SourceOutflowName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

