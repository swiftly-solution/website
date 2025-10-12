---
title: C_OP_RemapNamedModelElementOnceTimed
---

```csharp
public interface C_OP_RemapNamedModelElementOnceTimed : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_RemapNamedModelElementOnceTimed>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **FallbackNames** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapNamedModelElementOnceTimed.cs#L22)

```csharp
ref CUtlVector<CUtlString> FallbackNames { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### **FieldInput** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapNamedModelElementOnceTimed.cs#L28)

```csharp
ParticleAttributeIndex_t FieldInput { get; }
```

- Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### **FieldOutput** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapNamedModelElementOnceTimed.cs#L30)

```csharp
ParticleAttributeIndex_t FieldOutput { get; }
```

- Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### **InNames** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapNamedModelElementOnceTimed.cs#L18)

```csharp
ref CUtlVector<CUtlString> InNames { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### **Model** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapNamedModelElementOnceTimed.cs#L16)

```csharp
ref CStrongHandle<InfoForResourceTypeCModel> Model { get; }
```

- Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCModel](/docs/api/shared/schemadefinitions/infoforresourcetypecmodel)>

### **ModelFromRenderer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapNamedModelElementOnceTimed.cs#L24)

```csharp
ref bool ModelFromRenderer { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **OutNames** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapNamedModelElementOnceTimed.cs#L20)

```csharp
ref CUtlVector<CUtlString> OutNames { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### **Proportional** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapNamedModelElementOnceTimed.cs#L26)

```csharp
ref bool Proportional { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **RemapTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapNamedModelElementOnceTimed.cs#L32)

```csharp
ref float RemapTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

