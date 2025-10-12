---
title: ParticleNamedValueSource_t
---

```csharp
public interface ParticleNamedValueSource_t : ISchemaClass<ParticleNamedValueSource_t>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **DefaultConfig** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticleNamedValueSource_t.cs#L22)

```csharp
ParticleNamedValueConfiguration_t DefaultConfig { get; }
```

- Property Value

- [ParticleNamedValueConfiguration_t](/docs/api/shared/schemadefinitions/particlenamedvalueconfiguration_t)

### **IsPublic** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticleNamedValueSource_t.cs#L18)

```csharp
ref bool IsPublic { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticleNamedValueSource_t.cs#L16)

```csharp
string Name { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **NamedConfigs** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticleNamedValueSource_t.cs#L25)

```csharp
ref CUtlVector NamedConfigs { get; }
```

- Property Value

- [CUtlVector](/docs/api/)

### **ValueType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticleNamedValueSource_t.cs#L20)

```csharp
ref PulseValueType_t ValueType { get; }
```

- Property Value

- [PulseValueType_t](/docs/api/shared/schemadefinitions/pulsevaluetype_t)

